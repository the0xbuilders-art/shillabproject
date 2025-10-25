<label className="text-[12px] font-medium text-neutral-300 mb-1">
  Brief / prompt
</label>
...
<button
  className="..."
>
  {loading ? 'Generating… 🔄' : '⚡ Generate post'}
</button>
...
<label className="text-[12px] font-medium text-neutral-300 mb-1 flex items-center gap-2">
  <span>Output</span>
  {output && (
    <button
      onClick={copyToClipboard}
      className="text-[11px] text-[#facc15] hover:text-[#fde047] transition"
    >
      Copy
    </button>
  )}
</label>
