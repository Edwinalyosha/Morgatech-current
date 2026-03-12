import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { BUSINESS } from "@/lib/constants";

export function BookingSection() {
  return (
    <section className="py-24 bg-white" id="booking">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Left Panel */}
            <div className="lg:col-span-2 bg-primary p-12 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-black mb-4">Book Online</h3>
                <p className="text-primary-100 mb-8 opacity-80">
                  Save time by scheduling your repair or maintenance in advance.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <MaterialIcon name="schedule" />
                    <span>Same-day availability</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <MaterialIcon name="payments" />
                    <span>Transparent pricing</span>
                  </li>
                </ul>
              </div>
              <div className="mt-12">
                <p className="text-sm font-bold uppercase tracking-widest opacity-60">
                  Emergency?
                </p>
                <p className="text-xl font-bold">{BUSINESS.phone}</p>
              </div>
            </div>

            {/* Right Panel - Form */}
            <div className="lg:col-span-3 p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Service Type
                    </label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:bg-white transition-colors">
                      <option>Oil Change</option>
                      <option>Brake Repair</option>
                      <option>Diagnostics</option>
                      <option>Battery</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Vehicle Type
                    </label>
                    <input
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:bg-white transition-colors"
                      placeholder="e.g. 2018 Honda Civic"
                      type="text"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Preferred Date
                    </label>
                    <input
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:bg-white transition-colors"
                      type="date"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Preferred Time
                    </label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:bg-white transition-colors">
                      <option>Morning (8am - 12pm)</option>
                      <option>Afternoon (12pm - 5pm)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">
                    Your Name
                  </label>
                  <input
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:bg-white transition-colors"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <button
                  className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/30"
                  type="submit"
                >
                  Confirm Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
