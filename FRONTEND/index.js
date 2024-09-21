const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.static('public')); 
const port = 4000 ;
app.set('view engine', 'ejs');
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));


app.get('/', (req, res) => {
    const notice = fs.readFileSync('notice1.pdf'); 
    res.render('home.ejs', { notice });
});

app.get('/ppt', async(req, res) => {
    res.render('ppt.ejs');
});

app.get('/notice', (req, res) => {
    try {
        const pdfPath = 'notice.pdf';
        const stream = fs.createReadStream(pdfPath);
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `inline; filename="${pdfPath.split('/').pop()}"`);
        stream.pipe(res);
    } catch (error) {
        console.error('Error while streaming PDF:', error);
        res.status(500).render('error.ejs', { error: 'Internal Server Error' });
    }
});

app.get('/login', (req, res) => {
    res.render('login.ejs'); // Pass the error to the login template
});

app.get('/signup', (req, res) => {
    res.render('signup.ejs'); // Pass the error to the login template
});

app.get('/admindash', async (req, res) => {
    res.render('admindash.ejs');
});

app.get('/adminnote', async(req, res) => {
    res.render('adminnote.ejs');
});

app.get('/adminusers', (req, res) => {
    res.render('adminusers.ejs');
});

app.get('/adminrecords', (req, res) => {
    res.render('adminrecords.ejs');
});

app.get('/lawyerdash', async (req, res) => {
    res.render('lawyerdash.ejs');
});

app.get('/lawyercreate', (req, res) => {
    
    res.render('lawyercreate.ejs');
});

app.get('/lawyerupdate', async(req, res) => {
    res.render('lawyerupdate.ejs');
});

app.get('/lawyeradddoc', async(req, res) => {
    res.render('lawyeradddoc.ejs');
});

app.get('/lawyeraccess', async(req, res) => {
    res.render('lawyeraccess.ejs');
});

app.get('/lawyerrevoke', async(req, res) => {
    res.render('lawyerrevoke.ejs');
});

app.get('/lawyerview', async(req, res) => {
    res.render('lawyerview.ejs');
});

app.get('/judgedash', async (req, res) => {
    res.render('judgedash.ejs');
});

app.get('/judgeupdate', async(req, res) => {
    res.render('judgeupdate.ejs');
});

app.get('/judgeadddoc', async(req, res) => {
    res.render('judgeadddoc.ejs');
});

app.get('/judgeaccess', async(req, res) => {
    res.render('judgeaccess.ejs');
});

app.get('/judgerevoke', async(req, res) => {
    res.render('judgerevoke.ejs');
});

app.get('/judgeview', async(req, res) => {
    res.render('judgeview.ejs');
});

app.get('/judgement', async(req, res) => {
    res.render('judgement.ejs');
});

app.get('/clientdash', async (req, res) => {
    res.render('clientdash.ejs');
});


app.get('/forgot',(req, res) => {
    res.render('forgot.ejs');
});

app.get('/clientupdate', async(req, res) => {
    res.render('clientupdate.ejs');
});

app.get('/clientadddoc', async(req, res) => {
    res.render('clientadddoc.ejs');
});

app.get('/clientview', async(req, res) => {
    res.render('clientview.ejs');
});

app.listen(port, () => {
    console.log(`Port is listening on http://localhost:${port}`);
});

app.use((err, req, res, next) => {
    res.status(500).render('error.ejs', { error: 'Internal Server Error' });
});

app.get('/logout', (req, res) => {
    res.redirect('/login');
});