window.fill = function ($scope, $http, $rootScope, $cookies,$location) {
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

    var url = "http://localhost:3000/sanpham"
    // call Api
    $scope.ds = undefined
    $http.get(url)
        .then(function (response) {
            $scope.ds = response.data
            var idt = response.data
            $rootScope.idcheck = idt
        })
        .catch(function (error) {
            console.log("k gọi dc j" + error)
        })
    $scope.delete = function (id, index) {
            var ann = $rootScope.idcheck[index].idtao
        if (ann === $rootScope.currentUser) {
            $rootScope.idsp = id
            let check = confirm("Bạn có muốn xóa hay không")
            if (check) {
                let api = url + "/" + id
                $http.delete(api)
                    .then
            }
        } else {
            alert("Bạn không thể xoá sản phẩm không phải là bạn tạo !")
        }
    }
    $scope.image = []
    $scope.show = function (id, index) {
        var ann = $rootScope.idcheck[index].idtao
        $rootScope.showw = ann
        var api1 = url + "/" + id
        $rootScope.url = api1
        $http.get(api1)
            .then(function (response) {
                $scope.dsa = response.data.anhct
                $rootScope.abcd = response.data.anhct
                $rootScope.img = response.data
            })
    }
    $scope.sua = function(index){
        var ann = $rootScope.idcheck[index].idtao
        $rootScope.showw = ann
        console.log($rootScope.showw)
    }
    $scope.newimg = function () {

        if ($rootScope.showw === $rootScope.currentUser) {
            var newimg = angular.copy($scope.image)
            $rootScope.abcd.push(newimg)
            $http.patch($rootScope.url, { anhct: $rootScope.abcd })
                .then(function (response) {
                    alert("thanh cong")
                })
        } else {
            alert("Bạn không thể thêm ảnh cho sản phẩm không phải là bạn tạo !")
        }
    }
    $scope.deleteimg = function (index) {
        if ($rootScope.showw === $rootScope.currentUser) {
            var check = confirm("Bạn có muốn xoá ảnh này không ?")
            if (check) {
                var imgdelete = index
                $rootScope.abcd.splice(imgdelete, 1)
                console.log($rootScope.abcd)
                $http.patch($rootScope.url, { anhct: $rootScope.abcd })
                    .then(function (response) {
                        alert("Xoá thành công")
                    })
            }
        } else {
            alert("Bạn không thể xoá ảnh của sản phẩm không phải là bạn tạo !")
        }
    }
}