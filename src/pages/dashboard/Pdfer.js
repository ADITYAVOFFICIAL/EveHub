function Pdfer() {
    return (
      <object data={require("./1.pdf")} type="application/pdf" width="100%" height="100%">
        <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
      </object>
    );
  }
  
  export default Pdfer;
  