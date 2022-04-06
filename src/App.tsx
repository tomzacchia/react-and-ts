import React, { ChangeEvent, FC, useState } from "react";

const Counter: FC = () => {
  return (
    <main className="Counter">
      <h1>Days Since Last Incident</h1>
    </main>
  );
};

const Application: FC = () => <Counter />;

export default Application;
