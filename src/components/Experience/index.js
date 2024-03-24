import React from "react";

const Text = ({ text, classes }) => {
  return (
    <p
      className={`p-2 ${classes} uppercase absolute text-[12px] backdrop-blur-sm bg-[#ff71431a] rounded-[20px] `}
    >
      {text}
    </p>
  );
};
function Experience() {
  return (
    <div className="flex w-full my-32 scale-[1.2]">
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
        <p className="absolute text-[30px] min-w-[450px] flex justify-center items-center font-semibold">
          10 YEARS OF{" "}
          <span className="text-[--color-theme]">&nbsp;EXPERIENCE.</span>
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
              top: "-15px",
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
                right: "-10px",
                top: "60%",
              }}
            ></div>
          </div>
        </div>

        <Text text={"graphic design"} classes={"top-[0px] left-[-20px]"} />
        <Text text={"advertising"} classes={"top-[0px] right-[0px]"} />
        <Text text={"digital marketing"} classes={"top-[80px] left-[-110px]"} />
        <Text text={"app design"} classes={"top-[70px] left-[50px]"} />
        <Text text={"web design"} classes={"top-[80px] right-[-50px]"} />
        <Text text={"development"} classes={"bottom-[80px] left-[-70px]"} />
        <Text
          text={"email marketing"}
          classes={"bottom-[80px] right-[-100px]"}
        />
        <Text
          text={"software development"}
          classes={"bottom-[40px] right-[0px]"}
        />
        <Text text={"qr technology"} classes={"bottom-[0px] left-[0px]"} />
      </div>
    </div>
  );
}

export default Experience;
