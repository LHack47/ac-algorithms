//We will be opening a store! 

//Compare and update the inventory stored in an array against a second array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item. 
//Input= Array with nested arrays, and an array of updates
//Output = Edited/appended array with items in alphabetical order

function updateInventory(arr1, arr2) {

    // Variable for location of the item
    var index;

    // A helper method to return the index of a specified product (undefined if not found)
    var getProductIndex = function (name) {
        for (var i = 0; i < this.length; i++) {
            if (this[i][1] === name) {
                return i;
            }
        }
        return undefined;
    }

    // For each item of the new Inventory
    for (var i = 0; i < arr2.length; i++) {

        // Invoke our helper function using arr1 as this
        index = getProductIndex.call(arr1, arr2[i][1]);

        // If the item doesn't exist
        if (index === undefined) {
            // Push the entire item
            arr1.push(arr2[i]);
        } else {
            // Add the new quantity of the current item
            arr1[index][0] += arr2[i][0];
        }

    }

    // Sort alphabetically, by the product name of each item
    arr1.sort(function (a, b) {
        if (a[1] > b[1]) {
            return 1;
        }
        if (a[1] < b[1]) {
            return -1;
        }
        return 0;
    });

    return arr1;
}
 
    //If these items match, add number of item to output array
    //If a new array item does not match, push it into output array
    //Sort the output array into alphabetical order based on the item
}

// Example inventory lists
var currentInv = [
    [21, "Jackets"],
    [2, "Dress Shirts"],
    [1, "Pairs of Shoes"],
    [5, "Skirts"]
];

var newInv = [
    [2, "Pairs of Shoes"],
    [3, "Watches"],
    [67, "Jackets"],
    [7, "Pants"]
];

updateInventory(currentInv, newInv);

