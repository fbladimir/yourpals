import { config } from "../lib/config";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with YourPals",
      features: [
        "Access to MoneyPal basic features",
        "SleepPal sleep tracking",
        "CartPal grocery lists",
        "Basic AI suggestions",
        "Community support"
      ],
      popular: false,
      cta: "Get Started Free",
      href: config.aiPlatformUrl,
      color: "from-slate-500 to-slate-600",
      accentColor: "text-slate-400"
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "per month",
      description: "Unlock the full potential of all YourPals",
      features: [
        "Everything in Free, plus:",
        "Advanced financial insights",
        "Priority AI recommendations",
        "Custom automation rules",
        "Premium support",
        "Early access to new Pals",
        "Data export & analytics"
      ],
      popular: true,
      cta: "Start Pro Trial",
      href: config.aiPlatformUrl,
      color: "from-blue-500 to-cyan-500",
      accentColor: "text-blue-400"
    }
  ];

  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 ring-1 ring-blue-500/30 text-blue-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            Pricing Plans
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Simple,{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              transparent
            </span>{" "}
            pricing
          </h2>
          <p className="mt-2 text-sm leading-6 text-white/70">
            Tailored solutions for large organizations.
          </p>
        </div>

        {/* Enhanced Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 max-w-6xl mx-auto mb-20">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative group ${
                plan.popular ? 'lg:scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold shadow-lg">
                    <span className="h-2 w-2 rounded-full bg-white animate-pulse"></span>
                    Most Popular
                  </div>
                </div>
              )}

              {/* Enhanced Card */}
              <div className={`relative h-full rounded-3xl p-8 lg:p-10 transition-all duration-500 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-white/10 to-white/5 ring-2 ring-blue-500/30 shadow-2xl shadow-blue-500/20' 
                  : 'bg-gradient-to-br from-white/5 to-white/10 ring-1 ring-white/20 hover:ring-white/40'
              }`}>
                
                {/* Floating background elements */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${
                  plan.popular ? 'from-blue-500/10 to-cyan-500/10' : 'from-slate-500/5 to-slate-600/5'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>

                {/* Plan Header with better spacing */}
                <div className="text-center mb-10 relative z-10">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    {plan.name}
                  </h3>
                  
                  {/* Enhanced Price Display */}
                  <div className="flex items-baseline justify-center gap-3 mb-4">
                    <span className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-xl lg:text-2xl text-white/60 font-medium">
                      {plan.period}
                    </span>
                  </div>
                  
                  <p className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-sm mx-auto">
                    {plan.description}
                  </p>
                </div>

                {/* Enhanced Features List with better spacing */}
                <div className="mb-10 relative z-10">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1.5">
                          <div className={`h-3 w-3 rounded-full ${
                            plan.popular ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-white/60'
                          }`}></div>
                        </div>
                        <span className="text-base lg:text-lg text-white/80 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enhanced CTA Button */}
                <div className="text-center relative z-10">
                  <a
                    href={plan.href}
                    className={`inline-flex items-center justify-center w-full rounded-2xl px-8 py-4 font-semibold text-lg transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30'
                        : 'bg-white/10 hover:bg-white/20 text-white ring-1 ring-white/30 hover:ring-white/50'
                    } hover:scale-105 active:scale-95`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-Only Enhanced Pricing Cards */}
        <div className="lg:hidden mb-16">
          <div className="space-y-6">
            {plans.map((plan) => (
              <div 
                key={plan.name}
                className={`relative group ${
                  plan.popular ? 'ring-2 ring-blue-500/30' : 'ring-1 ring-white/20'
                }`}
              >
                {/* Mobile Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-4 z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-semibold shadow-lg">
                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse"></span>
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Mobile Card */}
                <div className={`relative rounded-2xl p-6 transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-white/10 to-white/5' 
                    : 'bg-gradient-to-br from-white/5 to-white/10'
                }`}>
                  
                  {/* Mobile Plan Header */}
                  <div className="text-center mb-6">
                    <h4 className="text-2xl font-bold text-white mb-3">
                      {plan.name}
                    </h4>
                    
                    {/* Mobile Price Display */}
                    <div className="flex items-baseline justify-center gap-2 mb-3">
                      <span className="text-4xl font-bold text-white">
                        {plan.price}
                      </span>
                      <span className="text-lg text-white/60 font-medium">
                        {plan.period}
                      </span>
                    </div>
                    
                    <p className="text-base text-white/70 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Mobile Features List */}
                  <div className="mb-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-1">
                            <div className={`h-2.5 w-2.5 rounded-full ${
                              plan.popular ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-white/60'
                            }`}></div>
                          </div>
                          <span className="text-sm text-white/80 leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mobile CTA Button */}
                  <div className="text-center">
                    <a
                      href={plan.href}
                      className={`inline-flex items-center justify-center w-full rounded-xl px-6 py-3 font-semibold text-base transition-all duration-300 touch-manipulation ${
                        plan.popular
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/25'
                          : 'bg-white/10 hover:bg-white/20 text-white ring-1 ring-white/30'
                      } active:scale-95`}
                    >
                      {plan.cta}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 text-base lg:text-lg text-white/60">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></span>
              <span>30-day free trial</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></span>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></span>
              <span>No setup fees</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
