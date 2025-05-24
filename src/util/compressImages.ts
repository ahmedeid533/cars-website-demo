export function compressImageFile(
	file: File,
	quality: number = 0.7,
	maxWidth: number = 800
): Promise<File> {
	return new Promise((resolve) => {
		const img = new Image();
		const reader = new FileReader();

		reader.onload = (e) => {
			img.src = e.target?.result as string;
		};

		img.onload = () => {
			const scale = Math.min(maxWidth / img.width, 1); // Don't upscale
			const canvas = document.createElement('canvas');
			canvas.width = img.width * scale;
			canvas.height = img.height * scale;

			const ctx = canvas.getContext('2d');
			if (ctx) {
				ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
				canvas.toBlob(
					(blob) => {
						if (blob) {
							const compressedFile = new File([blob], file.name, {
								type: blob.type,
								lastModified: Date.now(),
							});
							resolve(compressedFile);
						}
					},
					file.type, // Keep original type
					quality
				);
			}
		};

		reader.readAsDataURL(file);
	});
}
