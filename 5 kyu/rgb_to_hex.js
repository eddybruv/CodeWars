/**
 * The rgb function is incomplete. Complete it so that passing RGB decimal values will result in a hexadecimal representation being returned.
 * Valid decimal values for RGB are 0 -255.
 * Any values that fall out of that range must be rounded to the closest valid value 
 */

function n(n) {
  if (n.length > 1) return n;
  else return n > 9 ? "" + n : "0" + n;
}

function rgb(r, g, b) {
  // complete this function
  if (r > 255) r = 255;
  if (g > 255) g = 255;
  if (b > 255) b = 255;

  if (r < 0) r = 0;
  if (g < 0) g = 0;
  if (b < 0) b = 0;

  let rHex = r.toString(16).toUpperCase();
  let bHex = b.toString(16).toUpperCase();
  let gHex = g.toString(16).toUpperCase();

  console.log(gHex);
  return n(rHex) + n(gHex) + n(bHex);
}

describe("Tests", () => {
  it("Basic Tests", () => {
    Test.assertEquals(rgb(0, 0, 0), "000000");
    Test.assertEquals(rgb(0, 0, -20), "000000");
    Test.assertEquals(rgb(300, 255, 255), "FFFFFF");
    Test.assertEquals(rgb(173, 255, 47), "ADFF2F");
  });
});

// optimal solution
function rgb(r, g, b) {
  return toHex(r) + toHex(g) + toHex(b);
}

function toHex(d) {
  if (d < 0) {
    return "00";
  }
  if (d > 255) {
    return "FF";
  }
  return ("0" + Number(d).toString(16)).slice(-2).toUpperCase();
}