import React, { useState, useEffect } from "react";
import Switch from "react-switch";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    setIsDark(!isDark);
  };

  // add this useEffect hook to apply theme on page load and when `isDark` changes
  useEffect(() => {
    const root = window.document.getElementById("blog");
    if (isDark) {
      root.classList.add("bg-gray-700");
      root.classList.add("text-white");
      root.classList.remove("bg-white");
      root.classList.remove("text-black");
    } else {
      root.classList.add("bg-white");
      root.classList.add("text-black");
      root.classList.remove("bg-gray-700");
      root.classList.remove("text-white");
    }
  }, [isDark]);

  return (
    <label className="mx-auto block">
      {isDark ? (
        <div>
          <span className="text-black mr-2 my-14">Light</span>
          <Switch
            onChange={handleToggle}
            checked={isDark}
            uncheckedIcon={false}
            checkedIcon={false}
          />
        </div>
      ) : (
        <div>
          <span className="text-gray-900 ml-2">Dark</span>
          <Switch
            onChange={handleToggle}
            checked={isDark}
            uncheckedIcon={false}
            checkedIcon={false}
          />
        </div>
      )}
    </label>
  );
}

export default ThemeToggle;
