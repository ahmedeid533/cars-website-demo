"use client"
const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <svg
        className="w-[102px] h-[40px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          transform="translate(2 1)"
          stroke="#002742"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            className="animate-[shake_0.2s_ease-in-out_infinite_alternate]"
            d="M47.293 2.375C52.927.792 54.017.805 54.017.805c2.613-.445 6.838-.337 9.42.237l8.381 1.863c2.59.576 6.164 2.606 7.98 4.531l6.348 6.732 6.245 1.877c3.098.508 5.609 3.431 5.609 6.507v4.206c0 .29-2.536 4.189-5.687 4.189H36.808c-2.655 0-4.34-2.1-3.688-4.67 0 0 3.71-19.944 14.173-23.902zM36.5 15.5h54.01"
            strokeWidth="3"
          />
          <ellipse
            strokeWidth="3.2"
            fill="#FFF"
            cx="83.493"
            cy="30.25"
            rx="6.922"
            ry="6.808"
          />
          <ellipse
            strokeWidth="3.2"
            fill="#FFF"
            cx="46.511"
            cy="30.25"
            rx="6.922"
            ry="6.808"
          />
          <path
            className="animate-[line_0.8s_ease-in-out_infinite]"
            d="M22.5 16.5H2.475"
            strokeWidth="3"
          />
          <path
            className="animate-[line_0.8s_ease-in-out_infinite_delay-200]"
            d="M20.5 23.5H.4755"
            strokeWidth="3"
          />
          <path
            className="animate-[line_0.8s_ease-in-out_infinite_delay-400]"
            d="M25.5 9.5h-19"
            strokeWidth="3"
          />
        </g>
      </svg>
      <style>
        {`
          @keyframes shake {
            0% { transform: translateY(-2%); }
            100% { transform: translateY(3%); }
          }
          
          @keyframes line {
            0%, 25% { stroke-dashoffset: 22; }
            50%, 51% { stroke-dashoffset: 0; }
            80%, 100% { stroke-dashoffset: -22; }
          }
        `}
      </style>
    </div>
  );
};

export default loading;
