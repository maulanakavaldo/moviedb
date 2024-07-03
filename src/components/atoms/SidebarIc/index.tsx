import React from "react";

interface SidebarIcProps {
  onClick: () => void;
}

const SidebarIc: React.FC<SidebarIcProps> = ({ onClick }) => {
  return (
    <div className="py-2 cursor-pointer" onClick={onClick}>
      <svg
        width={58}
        height={58}
        viewBox="0 0 41 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 0C-3.979 0 -17 13.021 -17 29C-17 44.979 -3.979 58 12 58C27.979 58 41 44.979 41 29C41 13.021 27.979 0 12 0ZM17.191 37.7C18.032 38.541 18.032 39.933 17.191 40.774C16.756 41.209 16.205 41.412 15.654 41.412C15.103 41.412 14.552 41.209 14.117 40.774L3.88 30.537C3.039 29.696 3.039 28.304 3.88 27.463L14.117 17.226C14.958 16.385 16.35 16.385 17.191 17.226C18.032 18.067 18.032 19.459 17.191 20.3L8.491 29L17.191 37.7Z"
          fill="#48DBFB"
        />
      </svg>
    </div>
  );
};

export default SidebarIc;


