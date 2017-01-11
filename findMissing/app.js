module.exports = {
    findMissing: function (arr1, arr2) {
        //didn't rearrange an make array one the longer or shorter array since the longer array is on the rhs
        if (arr1.length == arr2.length) {
        return 0;
        }    
        else {
            for (var i = 0; i < arr1.length; i++) {
                for (var i = 0; i < arr2.length; i++) {
                    if (arr1[i] != arr2[i]) {
                        return arr2[i];
                    }
                }
            }
        }
    }
}