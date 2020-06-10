// The rgb function is incomplete. Complete it so that passing in RGB decimal values will 
// result in a hexadecimal representation being returned. 
// Valid decimal values for RGB are 0 - 255. 
// Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255)  returns FFFFFF
// rgb(255, 255, 300)  returns FFFFFF
// rgb(0,0,0)  returns 000000
// rgb(148, 0, 211)  returns 9400D3 



function rgb(r, g, b){
    const c = {0:'0', 1:'1', 2:'2', 3:'3', 4:'4', 5:'5', 6:'6', 7:'7', 8:'8', 9:'9', 10:'A', 11:'B', 12:'C', 13:'D', 14:'E', 15:'F'} 
    r > 255 ? r = 255 : r < 0 ? r = 0 : r = r 
    g > 255 ? g = 255 : g < 0 ? g = 0 : g = g
    b > 255 ? b = 255 : b < 0 ? b = 0 : b = b

    // this needs to be refactored
    let digit1 = Math.floor(r / 16)
    let digit2 = (((r/16) % 1) * 16)
    let digit3 = Math.floor(g / 16)
    let digit4 = (((g/16) % 1) * 16)
    let digit5 = Math.floor(b / 16)
    let digit6 = (((b/16) % 1) * 16)
    return c[digit1] += c[digit2] += c[digit3] += c[digit4] += c[digit5] += c[digit6]
}

console.log(rgb(260, 270, 256))