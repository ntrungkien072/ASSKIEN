

window.add = function ($scope, $http, $rootScope, $cookies) {
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
    var a = document.getElementById("1");
    var b = document.getElementById("2");
    var c = document.getElementById("3");
    var d = document.getElementById("4");
    var e = document.getElementById("5");
    var f = document.getElementById("6");
    var g = document.getElementById("7");
    var h = document.getElementById("8");
    var i = document.getElementById("9");
    var k = document.getElementById("10");
    $scope.data = {
        ten: "",
        loai: "",
        card: 0,
        atm: 0,
        anh: "",
        anhct :[],
        idtao: ""
    }
    
    $scope.data.idtao = $rootScope.currentUser
    var url = "http://localhost:3000/sanpham"
    $scope.validate = function () {
        f.innerText = "";
        g.innerText = "";
        h.innerText = "";
        i.innerText = "";
        k.innerText = "";
    }
    $scope.save = function () {
        if (a.value == "") {
            f.innerText = "Không được bỏ trống Rank"
        } else if (b.value == "") {
            g.innerText = "Không được bỏ trong tuong"
        } else if (c.value > 1000 || c.value % 1 !== 0) {
            h.innerText = "Trang phuc phải là số nguyên và nho hon 1000"
        } else if (d.value < 1000 || d.value % 1 !== 0) {
            i.innerText = "Giá tiền phải là số nguyên và lớn hơn 1000"
        } else if (e.value == "") {
            k.innerText = "Không được bỏ trống link ảnh"
        }
        else {
            let data = angular.copy($scope.data)

            $http.post(url, data)
                .then(function (response) {
                    alert("Them thanh cong")
                    $location.path("/qlsp")
                })
        }
    }
}