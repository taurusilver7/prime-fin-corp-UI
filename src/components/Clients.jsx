import React from "react";
import { clients } from "../constants";

const Clients = () => {
  return (
    <section className="flex items-center justify-center my-4">
      <div className="flex items-center justify-center flex-wrap w-full">
        {clients.map((client) => (
          <div
            key={client.id}
            className="flex-1 flex items-center justify-center sm:min-w-[192px] min-w-[120px]"
          >
            <img
              src={client.logo}
              alt="logo"
              className="sm:w-[192px] w-[100px] object-contain "
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
