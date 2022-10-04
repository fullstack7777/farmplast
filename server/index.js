const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();

const  PORT = 8080;
app.use(cors());
app.use(express.json())

//Get all categories
app.get("/api/getAllCategories", (req,res)=>{
    db.query("select c.category_id, c.parent_id, c.sort_order, ocd.name, seo.keyword from oc_category c left join oc_category_description ocd on c.category_id = ocd.category_id left join oc_seo_url seo on seo.value like concat('%', c.category_id)  and seo.`key`='path' where c.status=1", (err,result)=>{
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
    db.query("select p.product_id, p.model, p.image, opd.name, om.name as manufacturer  from oc_product p inner join oc_product_description opd on p.product_id = opd.product_id inner join oc_manufacturer om on p.manufacturer_id = om.manufacturer_id where p.status=1 order by p.quantity desc limit 4", (err,result)=>{
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