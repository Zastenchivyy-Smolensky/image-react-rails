import React from "react";

function Form(props) {
  const { handleChange, handleSubmit, value } = props;
  return (
    <div>
      <form>
        <div>
          <label htmlFor="title">猫の名前：</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={(e) => handleChange(e)}
            value={value.title}
          />
        </div>

        <button onClick={(e) => handleSubmit(e)}>編集</button>
      </form>
    </div>
  );
}

export default Form;
