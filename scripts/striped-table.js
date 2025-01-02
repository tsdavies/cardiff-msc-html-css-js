document.addEventListener("DOMContentLoaded", function () {
  /* Everything below is accessible at this point as the DOM has loaded so we can grab the tags with javascript*/
  const rows = document.querySelectorAll(".striped-table tr");
  rows.forEach((row, index) => {
    /* modulus operator to select every other and add a different style class */
    if (!row.classList.contains("do-not-stripe")) {
      if (index % 2 === 0) {
        row.classList.add("even-row");
      } else {
        row.classList.add("odd-row");
      }
    }
  });
});
