import Image from "next/image";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { BUSINESS, HOME_IMAGES } from "@/lib/constants";

export function LocationSection() {
  
  const freeIframeSrc = `https://maps.google.com/maps?q=${BUSINESS.mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${BUSINESS.mapQuery}`;
  
  return (
    <section className="py-24 bg-slate-50" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Info Card */}
          <div className="order-2 lg:order-1">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
              <h3 className="text-3xl font-black mb-6">Visit Our Shop</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MaterialIcon
                    name="location_on"
                    className="text-primary mt-1"
                  />
                  <div>
                    <p className="font-bold">Our Address</p>
                    <p className="text-slate-600">{BUSINESS.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MaterialIcon
                    name="schedule"
                    className="text-primary mt-1"
                  />
                  <div>
                    <p className="font-bold">Business Hours</p>
                    <p className="text-slate-600">{BUSINESS.hours.weekday}</p>
                    <p className="text-slate-600">{BUSINESS.hours.saturday}</p>
                    <p className="text-slate-600">{BUSINESS.hours.sunday}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MaterialIcon name="call" className="text-primary mt-1" />
                  <div>
                    <p className="font-bold">Phone Number</p>
                    <a 
                      href={`tel:${BUSINESS.phone.replace(/[^0-9]/g, "")}`} 
                      className="text-slate-600 hover:text-primary transition-colors"
                    >
                      {BUSINESS.phone}
                    </a>
                  </div>
                </div>
              </div>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full inline-flex justify-center items-center border-2 border-primary text-primary hover:bg-primary hover:text-white py-3 rounded-lg font-bold transition-all"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Map Image */}
          <div className="order-1 lg:order-2 h-[450px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative">
             <iframe
              title="Morgatech Auto Repair Location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              src={freeIframeSrc}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
