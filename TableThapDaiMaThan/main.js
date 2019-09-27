$(document).ready(function () {

    let tBody = $('tbody')

    students = [
        {name: 'Binh Chủ Xi Vưu', birthyear: '492TCN', email: 'NguuDoDang_Number1@yahoo.com', phone: '0333636363'},
        {name: 'Chiến Thần Hình Thiên', birthyear: '501TCN', email: 'ThichCaKhia@gmail.com', phone: '0747667667'},
        {name: 'Tinh Thần Khoa Phụ', birthyear: '374TCN', email: 'KhoaPhu_Not_PhuKhoa@gmail.com', phone: '0966999666'},
        {name: 'Thủy Thần Cộng Công', birthyear: '486TCN', email: 'WaterTinhKhiet@gmail.com', phone: '0868345678'},
        {name: 'Phong Bá Phi Liêm', birthyear: '202TCN', email: 'BoyDepTrai@yahoo.com', phone: '0123667766'},
        {name: 'Vũ Sư Bình Ế', birthyear: '149TCN', email: 'Binh_ChuaBaoGioE@gmail.com', phone: '0967672508'},
        {name: 'U Minh Song Thần', birthyear: '783TCN', email: 'SongSong_2_HuynhDe@gmail.com', phone: '0999999999'},
        {name: 'Ma Tinh Hậu Khanh', birthyear: '652TCN', email: 'CuongThiThuyTo_Cute@gmail.com', phone: '0906789652'},
        {name: 'Hạn Thần Nữ Bạt', birthyear: '922TCN', email: 'KieuNu_KhoHan@yahoo.com', phone: '0966922922'},
        {name: 'Độn Thần Ngân Linh Tử', birthyear: '105TCN', email: 'PhiThien_DonDia@gmail.com', phone: '0877105501'},
        
    ]
    
    studentsClone = [...students]

    renderStudents(students)

    $('select').on('change', function (e) {
        e.preventDefault()
        var optionSelected = $("option:selected", this);
        var valueSelected = this.value;
        console.log(valueSelected)
        if(valueSelected == 'name-sort') {
            let newArr = studentsClone.sort(function(a,b) {
                if(a.name < b.name) { return -1; }
                if(a.name > b.name) { return 1; }
                return a.name - b.name;
            })
            tBody.empty();
            renderStudents(newArr)
        }
        else if(valueSelected == 'birthyear-sort') {
            let newArr = studentsClone.sort(function(a,b) {
                return a.birthyear - b.birthyear;
            })
            tBody.empty();
            renderStudents(newArr)
        }
        else if(valueSelected == 'phone-sort') {
            let newArr = studentsClone.sort(function(a,b) {
                return a.phone - b.phone;
            })
            tBody.empty();
            renderStudents(newArr)
        }
        else if(valueSelected == 'email-sort') {
            let newArr = studentsClone.sort(function(a,b) {
                if(a.email < b.email) { return -1; }
                if(a.email > b.email) { return 1; }
                return a.email - b.email;
            })
            tBody.empty();
            renderStudents(newArr)
        }
        else {
            tBody.empty();
            renderStudents(students)
        }
    });

    function renderStudents(arrName) {
        $.each(arrName, (index, value) => {
            tBody.append(
                `<tr>
                    <td>${value.name}</td>
                    <td>${value.birthyear}</td>
                    <td>${value.email}</td>
                    <td>${value.phone}</td>
                    <td>
                        <a href="#" class="function-icon edit"><i class="far fa-edit"></i>Chỉnh sửa</a>
                        <a href="#" class="function-icon remove"><i class="far fa-edit"></i>Xóa</a>
                    </td>
                </tr>`
            )
        })

        let removeBtn = $('.function-icon.remove')
        let main = $('#main')
        let acceptBtn = $('#accept')
        let cancelBtn = $('#cancel')
    
        removeBtn.on('click', function() {
            event.preventDefault();
            main.addClass('show')
            acceptBtn.on('click', () => {
                event.preventDefault();
                main.fadeOut('50', () => {
                    main.removeClass('show').removeAttr('style')
                    $(this).parent().parent().remove();
                })
            })
        })
        
        cancelBtn.on('click', function(){
            event.preventDefault();
            main.fadeOut('50', function(){
                main.removeClass('show').removeAttr('style')
            })
        })
    }
});