/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(s, n) {
    // i > haystack.len or inifinite
    for(let i=0; i<=s.length; i++) {
       
        // j > needle.len or inifinite
        for(let j=0; j<=n.length; j++) {
            
            // found
            if(j == n.length) 
                return i;
            
            // not found
            if(i+j == s.length)
                return -1;
            
            // 1 not match, break
            if(s.charCodeAt(i+j) != n.charCodeAt(j)) 
                break;
        }
    }
    
    return 0;
};
