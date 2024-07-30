"use client";

import { useRef } from "react";
import "./RangeSliderBar.css";

const RangeSliderBar = () => {
  const slideValueRef = useRef<HTMLSpanElement | null>(null);
  const inputSlider = useRef<HTMLInputElement | null>(null);

  const handleChangeSlider = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    if (slideValueRef.current) {
      slideValueRef.current.textContent = value || "";
      slideValueRef.current.style.left = Number(value) / 2 + "%";
      slideValueRef.current.classList.add("show");
    }
  };

  const handleOnBlurSlider = () => {
    if (slideValueRef.current) {
      slideValueRef.current.classList.remove("show");
    }
  };

  return (
    <div className="range">
      <div className="sliderValue">
        <span ref={slideValueRef}>100</span>
      </div>
      <div className="field">
        <div className="value left">0</div>
        <input
          ref={inputSlider}
          type="range"
          min={0}
          max={200}
          step="1"
          onChange={handleChangeSlider}
          onBlur={handleOnBlurSlider}
        />
        <div className="value right">200</div>
      </div>
    </div>
  );
};

export default RangeSliderBar;
