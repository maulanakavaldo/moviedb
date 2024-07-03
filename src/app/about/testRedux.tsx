"use client";
import { StateRedux } from "@interface/interfaceRedux";
import React from "react";
import { useSelector } from "react-redux";

export default function TestRedux() {
  const dataCount = useSelector((state: StateRedux) => state.dataCount);
  return (
    <div>
      <h1>DATA COUNT REDUX: {dataCount.increment}</h1>
    </div>
  );
}
