import React from "react";

function MyForm() {
  return (
    <>
      <form>
        <input type="checkbox" id="check1" name="GITCLI" value="GITandCLI" />
        <label>
          Belajar GIT & CLI
          <hr className="garis" />
          <br />
        </label>

        <input type="checkbox" id="check2" name="htmlcss" value="htmlcss" />
        <label>
          Belajar HTML & CSS
          <hr className="garis" />
          <br />
        </label>

        <input type="checkbox" id="check3" name="js" value="javascript" />
        <label>
          Belajar Javascript
          <hr className="garis" />
          <br />
        </label>

        <input
          type="checkbox"
          id="check4"
          name="reactdasar"
          value="reactdasar"
        />
        <label>
          Belajar ReactJS Dasar
          <hr className="garis" />
          <br />
        </label>

        <input
          type="checkbox"
          id="check5"
          name="reactadvance"
          value="reactadvance"
        />
        <label>
          Belajar ReactJS Advance
          <hr className="garis" />
          <br />
        </label>

        <input type="submit" value="SEND" />
      </form>
    </>
  );
}

export default MyForm