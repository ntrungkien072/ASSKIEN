window.phanquyen = function ($scope, $http, $rootScope, $window,$cookies,$location) {
    var bbbb = $cookies.getObject('now')
    var aaaa = $cookies.getObject('id')
    var cccc = $cookies.getObject('cv')
    $rootScope.currentUser = aaaa
    console.log($rootScope.currentUser)
    if(cccc == "1"){
        document.getElementById("ab").innerText = "ADMIN"
        document.getElementById("admin").style.display="block"

    }else{
        document.getElementById("ab").innerText = "KHÁCH HÀNG"
        document.getElementById("admin").style.display="none"
    }
    

}