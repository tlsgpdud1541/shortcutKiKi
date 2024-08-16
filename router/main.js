module.exports = (app) => {
    // 첫 접속 페이지
    app.get('/', (req, res) => {
        res.render('index.html');
    });
};