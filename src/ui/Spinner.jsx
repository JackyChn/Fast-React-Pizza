function Spinner() {
  return (
    <div
      className="mx-auto my-20 h-16 w-16 animate-spin rounded-full bg-[length:10px_10px] bg-no-repeat"
      style={{
        background: `radial-gradient(farthest-side, var(--color-brand-600) 94%, transparent) top/10px 10px no-repeat, 
                      conic-gradient(transparent 30%, var(--color-brand-600))`,
        WebkitMask: `radial-gradient(farthest-side, transparent calc(100% - 10px), black 0)`,
      }}
    ></div>
  );
}

export default Spinner;
