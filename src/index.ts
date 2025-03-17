import 'dotenv/config'
import app from './server'

const port = process.env.PORT || 4011

app.listen(port, ()=>{
    console.log(`listen on http://localhost:${port}`);
})