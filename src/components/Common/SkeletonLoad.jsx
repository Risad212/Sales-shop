import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ({ type }) {
  if (type == "product") {
    return (
      <div className="grid grid-cols-3 gap-3 my-5">
        {Array(8).fill(
          <div>
            <SkeletonTheme
              baseColor="#ddd"
              highlightColor="#f5f6f6"
              height="300px"
            >
              <Skeleton />
            </SkeletonTheme>
          </div>
        )}
      </div>
    );
  } else if (type === "blog") {
    return (
      <div className="grid grid-cols-12">
        <div>
          <SkeletonTheme
            baseColor="#ddd"
            highlightColor="#f5f6f6"
            height="300px"
          >
            <Skeleton count={3} />
          </SkeletonTheme>
        </div>
      </div>
    );
  } else if (type === "shop") {
    return (
      <div className="grid grid-cols-3 gap-3">
        <div>
          <SkeletonTheme
            baseColor="#ddd"
            highlightColor="#f5f6f6"
            height="300px"
          >
            <Skeleton />
          </SkeletonTheme>
        </div>
      </div>
    );
  } else if (type === "categorydetails") {
    return (
      <div className="grid">
        {Array(8).fill(
          <div className="mb-3">
            <div className="box">
              <SkeletonTheme
                baseColor="#ddd"
                highlightColor="#f5f6f6"
                height="300px"
              >
                <Skeleton />
              </SkeletonTheme>
            </div>
          </div>
        )}
      </div>
    );
  } else if (type === "blogdetails") {
    return (
      <div className="grid">
        <div className="mb-3">
          <div className="box">
            <SkeletonTheme
              baseColor="#ddd"
              highlightColor="#f5f6f6"
              height="300px"
            >
              <Skeleton />
            </SkeletonTheme>
          </div>
        </div>
      </div>
    );
  } else if (type === "productCollection") {
    return (
      <>
        <div className="grid">
          {Array(4).fill(
            <div className="mb-3">
              <SkeletonTheme
                baseColor="#ddd"
                highlightColor="#f5f6f6"
                height="300px"
              >
                <Skeleton />
              </SkeletonTheme>
            </div>
          )}
        </div>
      </>
    );
  }
}
