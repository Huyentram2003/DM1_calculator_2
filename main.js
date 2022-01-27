function s1(input) {
    document.getElementById('nhapso').value += input ;
}
function s2() {
    let input = document.getElementById('nhapso').value;
    console.log('input = ' , input) ;
    document.getElementById('nhapso').value = eval(input) ;
}
function s3() {
    console.log('gọi hàm AC',) ;
    document.getElementById('nhapso').value = '' ;
}