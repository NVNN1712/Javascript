function hamOng() {
  let BienOng = "Bien Ong hi";
  console.log(BienOng);
  function hamCha() {
    let BienCha = "Bien Cha hi";
    console.log(BienCha);
    function hamCon() {
      let BienCon = "Bien Con hi";
      console.log(BienCon);
    }
    hamCon();
  }
  hamCha();
}
hamOng();
