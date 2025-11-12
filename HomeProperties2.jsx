import React from 'react';
import PropertyCard from './PropertyCard';
import connectDB from "../config/database";
import Property from "../models/Property";

const HomeProperties2 = async () => {
  await connectDB();

  const recentProperties = await  Property.find({}).sort({createdAt: -1})


  return (
    <div>
      
      <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
      <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
        Recent Properties
      </h2>
      {recentProperties.lenght === 0 ? (<p>No properties Found</p>) : (
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {recentProperties.map((property) => (
            <PropertyCard key={property._id} property={property} />

            ) 
            
            )}

        </div>)}

      </div>


    </section>
    </div>
  )
}

export default HomeProperties2
