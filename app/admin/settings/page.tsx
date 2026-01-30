"use client";

export default function SettingsPage() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-white mb-6">Settings</h1>

            <div className="space-y-6 max-w-2xl">
                {/* Event Configuration Section */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h2 className="text-xl font-bold text-white mb-4">Event Configuration</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-white/70 mb-1">Target Capacity</label>
                            <input
                                type="number"
                                defaultValue={500}
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange"
                            />
                            <p className="text-xs text-white/40 mt-1">Update this to change the goal on your dashboard.</p>
                        </div>
                        <div className="pt-2">
                            <button type="button" className="px-4 py-2 bg-orange text-white rounded-lg hover:bg-orange/90 transition-colors">
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>

                {/* Account Section */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h2 className="text-xl font-bold text-white mb-4">Admin Account</h2>
                    <p className="text-white/60 text-sm mb-4">Manage your authentication credentials.</p>
                    <button className="text-orange hover:text-orange/80 text-sm font-medium">
                        Change Password
                    </button>
                </div>
            </div>
        </div>
    );
}
