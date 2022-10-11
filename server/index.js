const express = require('express');
const db = require('./config/db')
const cors = require('cors')
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const app = express();

const  PORT = 8080;
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


//Get all categories
app.post("/api/sendEmail", async (req, res) => {
    const to = req.body.to;
    const subject = req.body.subject;
    const text = req.body.text;
    const html = req.body.html;
    let transporter = nodemailer.createTransport({
        host: "smtp.beget.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'noreply@farmplst.com', // generated ethereal user
            pass: '&k&xqB6N4U!2cRw', // generated ethereal password
        },
    });

    let info = await transporter.sendMail({
        from: '"noreply" <noreply@farmplst.com>', // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text: text, // plain text body
        html: html, // html body
    });
    console.log(info)
    res.send(info)
});

//Get all categories
app.get("/api/getAllCategories", (req,res)=>{
    db.query("select c.category_id, c.parent_id, c.sort_order, ocd.name, seo.keyword from oc_category c left join oc_category_description ocd on c.category_id = ocd.category_id left join oc_seo_url seo on seo.value like concat('%', c.category_id)  and seo.`key`='path' where c.status=1 and c.category_id <> 103", (err,result)=>{
            if(err) {
                console.log(err)
            }
            res.send(result)
        }
    );
});

//Search products
app.get("/api/search", (req,res)=>{
    const q = req.query.q;
    db.query("select p.product_id, p.model, p.image, opd.name, om.name as manufacturer  from oc_product p inner join oc_product_description opd on p.product_id = opd.product_id inner join oc_manufacturer om on p.manufacturer_id = om.manufacturer_id where p.status=1 and opd.name like CONCAT('%', ?,  '%')",[q], (err,result)=>{
            if(err) {
                console.log(err)
            }
            res.send(result)
        }
    );
});

//keywords
app.get("/api/query", (req,res)=>{
    const q = req.query.q;
    db.query("select p.model as label, p.product_id as id from oc_product p where p.status=1 and p.model like CONCAT('%', ?,  '%')",[q], (err,result)=>{
            if(err) {
                console.log(err)
            }
            res.send(result)
        }
    );
});

//Get products by category
app.get("/api/getProductsByCategory", (req,res)=>{
    const categoryId = req.query.category_ids;
    const categories = categoryId.split(',');
    if(categories.length===0 ||categoryId===""){
        db.query("select p.product_id, p.model, p.image, opd.name, om.name as manufacturer  from oc_product p inner join oc_product_description opd on p.product_id = opd.product_id inner join oc_manufacturer om on p.manufacturer_id = om.manufacturer_id where p.status=1", (err,result)=>{
                if(err) {
                    console.log(err)
                }
                res.send(result)
            }
        );
    }else {
        db.query("select p.product_id, p.model, p.image, opd.name, om.name as manufacturer  from oc_product p inner join oc_product_description opd on p.product_id = opd.product_id inner join oc_manufacturer om on p.manufacturer_id = om.manufacturer_id inner join oc_product_to_category optc on p.product_id = optc.product_id where p.status=1 and optc.category_id in (?)"
            ,[categories], (err,result)=>{
                if(err) {
                    console.log(err)
                }
                res.send(result)
            }
        );
    }
});

//add product to card
app.post("/api/newSession", (req,res)=>{
    const session = crypto.randomBytes(16).toString("hex");
    const date = new Date().addDays(1);
    db.query("insert into oc_session(session_id, data, expire) VALUES (?, '', ?)",[session, date], (err,result)=>{
            if(err) {
                console.log(err)
            }else {
                res.send({'session':session})
            }
        }
    );
});
//add product to card
app.post("/api/addCard", (req,res)=>{
    const productId = req.body.product_id;
    const quantity = req.body.quantity;
    const session = req.body.session;
    db.query("insert into oc_cart(api_id, customer_id, session_id, product_id,subscription_plan_id, `option`, quantity, date_added) values (1,1,?, ?,1,'[]',?,current_timestamp) on duplicate key update quantity=quantity+1;",[session, productId, quantity], (err,result)=>{
            if(err) {
                console.log(err)
            }else {
                res.send(true)
            }
        }
    );
});

//Get all categories
app.post("/api/getCarts", (req,res)=>{
    const session = req.body.session;
    db.query("select c.cart_id, c.quantity, p.image, p.model, d.name, om.name as manufacturer from oc_cart c left join oc_product p on c.product_id = p.product_id inner join oc_product_description d on p.product_id = d.product_id inner join oc_manufacturer om on p.manufacturer_id = om.manufacturer_id where c.session_id=?",[session], (err,result)=>{
            if(err) {
                console.log(err)
            }
            res.send(result)
        }
    );
});

//Get all categories
app.post("/api/delCart", (req,res)=>{
    const session = req.body.session;
    const id = req.body.id;
    db.query("delete from oc_cart where session_id=? and cart_id=?",[session,id], (err,result)=>{
            if(err) {
                console.log(err)
            }
            res.send(true)
        }
    );
});

//Get product by id
app.get("/api/getProductById", (req,res)=>{
    const productId = req.query.id;
    db.query("select p.product_id, p.model, p.image, opd.name,opd.description,opd.tag, om.name as manufacturer, (select group_concat(i.image SEPARATOR ';') from oc_product_image i where i.product_id=p.product_id) as images  from oc_product p inner join oc_product_description opd on p.product_id = opd.product_id inner join oc_manufacturer om on p.manufacturer_id = om.manufacturer_id where p.product_id=?",[productId], (err,result)=>{
            if(err) {
                console.log(err)
            }
            res.send(result)
        }
    );
});

//Get popular products
app.get("/api/getPopularProducts", (req,res)=>{
    db.query("select p.product_id, p.model, p.image, opd.name, om.name as manufacturer  from oc_product p inner join oc_product_description opd on p.product_id = opd.product_id inner join oc_manufacturer om on p.manufacturer_id = om.manufacturer_id inner join oc_product_to_category optc on p.product_id = optc.product_id where p.status=1 and optc.category_id=103", (err,result)=>{
            if(err) {
                console.log(err)
            }
            res.send(result)
        }
    );
});

// // Route to get all posts
// app.get("/api/get", (req,res)=>{
//     db.query("SELECT * FROM posts", (err,result)=>{
//             if(err) {
//                 console.log(err)
//             }
//             res.send(result)
//         }
//     );
// });
//
// // Route to get one post
// app.get("/api/getFromId/:id", (req,res)=>{
//
//     const id = req.params.id;
//     db.query("SELECT * FROM posts WHERE id = ?", id, (err,result)=>{
//             if(err) {
//                 console.log(err)
//             }
//             res.send(result)
//         }
//     );
// });
//
// // Route for creating the post
// app.post('/api/create', (req,res)=> {
//
//     const username = req.body.userName;
//     const title = req.body.title;
//     const text = req.body.text;
//
//     console.log(username,title,text)
//
//     db.query("INSERT INTO posts (title, post_text, user_name) VALUES (?,?,?)",[title,text,username], (err,result)=>{
//             if(err) {
//                 console.log(err)
//             }
//             console.log(result)
//         }
//     );
// })
//
// // Route for like
// app.post('/api/like/:id',(req,res)=>{
//
//     const id = req.params.id;
//     db.query("UPDATE posts SET likes = likes + 1 WHERE id = ?",id, (err,result)=>{
//             if(err) {
//                 console.log(err)
//             }
//             console.log(result)
//         }
//     );
// });
//
// // Route to delete a post
//
// app.delete('/api/delete/:id',(req,res)=>{
//     const id = req.params.id;
//
//     db.query("DELETE FROM posts WHERE id= ?", id, (err,result)=>{
//         if(err) {
//             console.log(err)
//         }
//     })
// })


app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})

Date.prototype.addDays = function(days) {
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}