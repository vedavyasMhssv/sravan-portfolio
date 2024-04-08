import React from "react";

const Text = ({ text, classes }) => {
  return (
    <p
      className={`px-[10px] py-[5px] ${classes} uppercase absolute text-[10px] backdrop-blur-sm bg-[#ff71431a] rounded-[20px] `}
    >
      {text}
    </p>
  );
};
function Experience() {
  return (
    <div className="flex w-full my-32 experience">
      <div
        style={{
          minHeight: "300px",
          minWidth: "300px",
          border: "2px dashed #ffffff30",
          borderRadius: "50%",
          marginInline: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <p className="absolute text-[22px] min-w-[500px] flex justify-center items-center font-semibold">
          10 + Years of
          <span className="text-[--color-theme]">
            &nbsp;Entrepreneurial Experience.
          </span>
        </p>
        <div
          id="orbitOne"
          style={{
            minHeight: "300px",
            minWidth: "300px",
            // border: "2px dashed #ffffff30",
            borderRadius: "50%",
            marginInline: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            className="absolute"
            style={{
              background: "linear-gradient(135deg, #FF7143 0%, #FFC700 100%)",
              minHeight: "22px",
              minWidth: "22px",
              maxHeight: "22px",
              maxWidth: "22px",
              borderRadius: "50%",
              top: "-12px",
            }}
          ></div>
        </div>
        <div
          style={{
            position: "absolute",
            minHeight: "180px",
            minWidth: "180px",
            border: "2px dashed #ffffff30",
            borderRadius: "50%",
            marginInline: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <div
            id="orbitTwo"
            style={{
              position: "absolute",
              minHeight: "180px",
              minWidth: "180px",
              // border: "2px dashed #ffffff30",
              borderRadius: "50%",
              marginInline: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                background: "linear-gradient(135deg, #FF3E00 0%, #FFA88C 100%)",
                minHeight: "22px",
                minWidth: "22px",
                maxHeight: "22px",
                maxWidth: "22px",
                borderRadius: "50%",
                right: "-5px",
                top: "60%",
              }}
            ></div>
          </div>
        </div>
        <Text
          text={"Business Digitalization"}
          classes={"top-[0px] left-[-20px]"}
        />
        <Text text={"Brand Mastery"} classes={"top-[20px] right-[-30px]"} />
        <Text text={"Tech Consulting"} classes={"top-[80px] left-[-110px]"} />
        <Text text={"Product Branding"} classes={"top-[70px] left-[50px]"} />
        <Text text={"Value Creation"} classes={"top-[80px] right-[-50px]"} />
        <Text text={"Team Building"} classes={"bottom-[80px] left-[-70px]"} />
        <Text
          text={"Product Design"}
          classes={"bottom-[80px] right-[-100px]"}
        />
        <Text text={"Growth Strategy"} classes={"bottom-[40px] right-[0px]"} />
        <Text
          text={"Cross-Collaboration"}
          classes={"bottom-[20px] left-[-40px]"}
        />
        <Text
          text={"Innovation Drive"}
          classes={"bottom-[-20px] left-[150px]"}
        />
      </div>
    </div>
  );
}

export default Experience;
