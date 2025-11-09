import Image from "next/image";
import connectDB from '../config/database';
import User from '../models/User';

export default function Home() {

        // * ##############  Database connection with MongoDB */

  connectDB().then(() => {
        console.log('Connected to the database Successfully!!!!');

        // Perform database operations here, e.g., fetching data, inserting documents

      }).catch((err) => {
        console.error('Database connection error:', err);

        // Handle the error, e.g., exit the application

      });

       
        
  return (
    
      <main>
       <h1>Home Page do Site</h1>
       <h6>Renato Alves Soares</h6>
      </main>
    
  );
}
