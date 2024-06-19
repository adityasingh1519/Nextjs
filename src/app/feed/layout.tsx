import React from "react";

export default function DefaultLayout(props: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      {props.children}
      {props.modal}
    </>
  );
}
