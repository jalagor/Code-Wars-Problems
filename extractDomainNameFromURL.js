// Write a function that when given a URL as a string, 
// parses out just the domain name and returns it as a string. 

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

function domainName(url){
    return url.match(/h([^;]*)\//g)[0].replace(/\./g, )
}
const a = 'https://www.google.com'

console.log(domainName(a))
