function getCategories(path) {
    $("[class = 'category']").remove()

    $.get(path, function (response) {
        let data = response;
        console.log(data)

        data.categories.forEach(function (category) {
            let imageSrc = "http://localhost:8080/files/" + category['imageName'];
            createCategoryElement(imageSrc, category)
        })
    })
}


function createCategoryElement(srcImage, category) {
    console.log(category["name"])
    console.log(category["id"])
    // var seniorDiv = document.getElementsByClassName("categories")[0]
    var middleDiv = document.createElement('div');
    var juniorDiv = document.createElement('div');
    var picture = document.createElement('img');
    var productRef = document.createElement('a');
    var refText = document.createTextNode(category["name"]);

    middleDiv.setAttribute("class", "category");
    juniorDiv.setAttribute("class", "category-photo");
    picture.setAttribute("id", "categoryImage");
    picture.setAttribute("style", "width: 200px");
    picture.setAttribute("src", srcImage);
    picture.setAttribute("alt", "img");
    productRef.setAttribute('class', "categoryName");
    productRef.setAttribute('id', "categoryName");
    productRef.setAttribute('href', "http://localhost:8080/categories/" + category["id"])

    productRef.appendChild(refText);
    juniorDiv.appendChild(picture);
    juniorDiv.appendChild(productRef);
    middleDiv.appendChild(juniorDiv);
    // seniorDiv.appendChild(middleDiv);
    document.body.appendChild(middleDiv)

    let namee = category["name"]
    $("div[categoryName = 'namee']")
    $('#categoryImage').attr(srcImage);
}