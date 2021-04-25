function getCategories() {
    $.get("http://localhost:8080/categoriesList/search?page=1&size=2", function (response) {
        let data = response;
        console.log(data)

        data.categories.forEach(function (category) {
            let imageSrc = "http://localhost:8080/files/" + category['imageName'];
        })
    })
}


function createCategoryElement(srcImage, categoryName) {
    var seniorDiv = document.getElementsByClassName("categories")[0]
    var middleDiv = document.createElement('div');
    var juniorDiv = document.createElement('div');
    var picture = document.createElement('img');
    var productRef = document.createElement('a');
    var refText = document.createTextNode(categoryName);

    middleDiv.setAttribute("class", "category");
    juniorDiv.setAttribute("class", "category-photo");
    picture.setAttribute("id", "categoryImage");
    picture.setAttribute("style", "width: 200px");
    picture.setAttribute("src", srcImage);
    picture.setAttribute("alt", "img");
    productRef.setAttribute('class', "categoryName");
    productRef.setAttribute('id', "categoryName");

    productRef.appendChild(refText);
    juniorDiv.appendChild(picture);
    juniorDiv.appendChild(productRef);
    middleDiv.appendChild(juniorDiv);
    seniorDiv.appendChild(middleDiv);

    $('#categoryName').html(categoryName);
    $('#categoryImage').attr(srcImage);
}