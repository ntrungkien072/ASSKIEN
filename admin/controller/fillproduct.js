window.fillproduct = function($scope,$http,$cookies,$rootScope){
    var bbbb = $cookies.getObject('now')
    var aaaa = $cookies.getObject('id')
    var cccc = $cookies.getObject('cv')
    $rootScope.currentUser = aaaa
    console.log($rootScope.currentUser)
    if(cccc == "1"){
        document.getElementById("admin").style.display="block"

        document.getElementById("ab").innerText = "ADMIN"
    }else{
        document.getElementById("admin").style.display="none"

        document.getElementById("ab").innerText = "KHÁCH HÀNG"
    }
    var url = "http://localhost:3000/sanpham"
    // call Api
    $scope.products = undefined
        $http.get(url)
        .then(function(response){
            $scope.products = response.data
            var a = response.data[1].id
            console.log(a)
        })
        .catch(function(error){
            console.log("k gọi dc j" +error)
        })
}