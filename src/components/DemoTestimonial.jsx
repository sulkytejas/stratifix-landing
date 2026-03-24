export default function DemoTestimonial() {
  return (
    <section className="mt-24 bg-primary text-on-primary rounded-2xl p-12 relative overflow-hidden">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-xl">
          <span className="inline-block px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold uppercase tracking-widest rounded-full mb-6">
            Trusted by Enterprise Leaders
          </span>
          <p className="text-2xl font-headline italic leading-snug">
            &ldquo;Stratifix has redefined how we scale our sales training.
            The emotion-aware AI provides insights our managers missed for
            years.&rdquo;
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden">
              <img
                className="object-cover h-full w-full"
                alt="Corporate headshot of a sales director"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMbjDpeUHcbiMwjCpZ0sVpoR_dU55OkgvOMlD5TkYTvUgAqp4A5FdUVz8Q-j8qHsqrkK0JyUz6hamxIRGXuB5AFdgzGMF6x3IB5bGgzNLr7N9f5XCC1p4pBtNTXDQdz4fI_K-eaqQ2qxGiP0s2mDKPmhARmCePyEEVG1E0CcxDSKiYsh3FIgkSf8UwEley0haWv_GCxNKKTx1ljhPF97mQIRdi1LNM0-psTYphIksHV8o-0yOP64IzZdzfNkBTEXBjVph7Uhr_WUw"
              />
            </div>
            <div>
              <p className="font-bold text-sm">Aditya Verma</p>
              <p className="text-xs text-on-primary/60">
                Director of Sales, FinTech Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block w-64 h-64 bg-primary-container/50 rounded-full blur-[80px] absolute -right-20 -top-20" />
      <div className="hidden md:block w-48 h-48 bg-tertiary-fixed/20 rounded-full blur-[60px] absolute right-40 bottom-0" />
    </section>
  );
}
