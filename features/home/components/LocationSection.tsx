import Image from "next/image";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { BUSINESS, HOME_IMAGES } from "@/lib/constants";

export function LocationSection() {
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
                    <p className="text-slate-600">{BUSINESS.phone}</p>
                  </div>
                </div>
              </div>
              <button className="mt-8 w-full border-2 border-primary text-primary hover:bg-primary hover:text-white py-3 rounded-lg font-bold transition-all">
                Get Directions
              </button>
            </div>
          </div>

          {/* Map Image */}
          <div className="order-1 lg:order-2 h-[450px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative">
            <Image
              src={HOME_IMAGES.map}
              alt="Map showing Beltsville location"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
