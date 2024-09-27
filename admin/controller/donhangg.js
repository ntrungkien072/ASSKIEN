window.donhangg = function ($scope, $http, $routeParams, $rootScope, $cookies) {
    var bbbb = $cookies.getObject('now')
    var aaaa = $cookies.getObject('id')
    var cccc = $cookies.getObject('cv')
    $rootScope.currentUser = aaaa
    console.log($rootScope.currentUser)
    if (cccc == "1") {
        document.getElementById("admin").style.display="block"

        document.getElementById("ab").innerText = "ADMIN"
    } else {
        document.getElementById("admin").style.display="none"

        document.getElementById("ab").innerText = "KHÁCH HÀNG"
    }
    var url = "http://localhost:3000/donhang"
    // call Api
    $scope.donhang = undefined
    $http.get(url)
        .then(function (response) {
            $scope.donhang = response.data
            $rootScope.dh = response.data
        })
        .catch(function (error) {
            console.log("k gọi dc j")
        })
    $scope.layid = function(id,index){
        $rootScope.newid = id;
        $rootScope.newindex = index;
    }
    $scope.acc = {
        tk: "",
        mk: ""
    }
    $scope.thanhcong = function () {
        var a = $rootScope.dh[$rootScope.newindex].trangthai
        $rootScope.abce = a
        console.log($rootScope.abce)
        let check = confirm("Bạn có muốn xác nhận là đã hoàn thành đơn này không !")
        var trangthaimoi = "Thành công";
        var tkacc = angular.copy($scope.acc.tk)
        var tkmk = angular.copy($scope.acc.mk)
        if (check) {
            if ($rootScope.abce == "Đã huỷ") {
                alert("Đơn hàng này đã bị huỷ !")
            }
            else {
                let api = url + "/" + $rootScope.newid
                $http.patch(api, { tk: tkacc , mk : tkmk, trangthai : trangthaimoi})
                    .then(function (response) {
                        alert("Xác nhận đơn hàng thành công");
                    })
            }

        }
    }
}