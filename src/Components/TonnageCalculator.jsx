import { useState } from "react";
import "./TonnageCalculator.css";

export default function TonnageCalculator({ data }) {
  const [form, setForm] = useState({
    length: "", breadth: "", height: "",
    people: "", state: "", floorLevel: "",
    glassLength: "", glassBreadth: "", direction: "",
  });

  const [appliances, setAppliances] = useState(() => {
    const initial = {};
    (data?.applianceFields || []).forEach(a => { initial[a.name] = ""; });
    return initial;
  });

  const [result, setResult] = useState(null);
  const [error, setError]   = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(""); setResult(null);
  };

  const handleAppliance = (e) => {
    setAppliances({ ...appliances, [e.target.name]: e.target.value });
    setResult(null);
  };

  const handleSubmit = () => {
    const l = parseFloat(form.length);
    const b = parseFloat(form.breadth);
    const h = parseFloat(form.height);

    if (!l || !b || !h)                              { setError("Please fill all Room Size fields."); return; }
    if (!form.people || isNaN(parseFloat(form.people))) { setError("Please enter number of people."); return; }

    const area = l * b;
    let btu = area * 20;
    if (h > 8) btu *= 1.10;
    btu += parseFloat(form.people) * 500;

    const gL = parseFloat(form.glassLength)  || 0;
    const gB = parseFloat(form.glassBreadth) || 0;
    btu += gL * gB * 800;                             // glass window heat

    (data?.applianceFields || []).forEach(a => {
      btu += (parseFloat(appliances[a.name]) || 0) * a.btuPerUnit;
    });

    const sunnyDirs = ["South", "West", "South-West", "South-East"];
    if (sunnyDirs.includes(form.direction)) btu *= 1.15; // sun exposure +15%

    const rawTonnage = btu / 12000;
    const sizes      = [0.5, 0.75, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5];
    const recommended = sizes.find(s => s >= rawTonnage) || sizes[sizes.length - 1];

    setResult({ btu: Math.round(btu), tonnage: rawTonnage.toFixed(2), recommended });
  };

  if (!data) return null;

  return (
    <div className="tc-wrapper">
      <div className="tc-card">
        <h2 className="tc-title">{data.title || "Tonnage Calculator"}</h2>
        <div className="tc-field-group">
          <label className="tc-label">Room Size (ft.)<span>*</span></label>
          <div className="tc-row">
            <input className="tc-input" name="length"  placeholder="Length"  value={form.length}  onChange={handleChange} type="number" min="0" />
            <input className="tc-input" name="breadth" placeholder="Breadth" value={form.breadth} onChange={handleChange} type="number" min="0" />
            <input className="tc-input" name="height"  placeholder="Height"  value={form.height}  onChange={handleChange} type="number" min="0" />
          </div>
        </div>

        {/* People & State */}
        <div className="tc-row tc-two-col">
          <div className="tc-field-group">
            <label className="tc-label">No. of People<span>*</span></label>
            <input className="tc-input tc-input-full" name="people" placeholder="Number" value={form.people} onChange={handleChange} type="number" min="0" />
          </div>
          <div className="tc-field-group">
            <label className="tc-label">State<span>*</span></label>
            <select className="tc-select" name="state" value={form.state} onChange={handleChange}>
              <option value="">--Select State--</option>
              {(data.states || []).map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>

        <div className="tc-row tc-two-col">
          <div className="tc-field-group">
            <label className="tc-label">Floor Level<span>*</span></label>
            <select className="tc-select" name="floorLevel" value={form.floorLevel} onChange={handleChange}>
              <option value="">Select Floor Level</option>
              {(data.floorLevels || []).map(f => <option key={f} value={f}>{f}</option>)}
            </select>
          </div>
          <div className="tc-field-group">
            <label className="tc-label">Glass Window Area (ft.)<span>*</span></label>
            <div className="tc-row">
              <input className="tc-input" name="glassLength"  placeholder="Length"  value={form.glassLength}  onChange={handleChange} type="number" min="0" />
              <input className="tc-input" name="glassBreadth" placeholder="Breadth" value={form.glassBreadth} onChange={handleChange} type="number" min="0" />
            </div>
          </div>
        </div>
        {(data.applianceFields || []).length > 0 && (
          <div className="tc-field-group">
            <label className="tc-label">No. of Appliances<span>*</span></label>
            <div className="tc-row tc-wrap">
              {data.applianceFields.map(a => (
                <input key={a.name} className="tc-input" name={a.name}
                  placeholder={a.label} value={appliances[a.name]}
                  onChange={handleAppliance} type="number" min="0" />
              ))}
            </div>
          </div>
        )}

        <div className="tc-field-group">
          <label className="tc-label">Window Direction<span>*</span></label>
          <select className="tc-select" name="direction" value={form.direction} onChange={handleChange}>
            <option value="">--Select Direction--</option>
            {(data.directions || []).map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>

        {error && <p className="tc-error">{error}</p>}

        <button className="tc-submit" onClick={handleSubmit}>
          <span className="tc-submit-icon">➤</span> SUBMIT
        </button>

        {result && (
          <div className="tc-result">
            <div className="tc-result-row">
              <span>Total Heat Load:</span>
              <strong>{result.btu.toLocaleString()} BTU/hr</strong>
            </div>
            <div className="tc-result-row">
              <span>Calculated Tonnage:</span>
              <strong>{result.tonnage} Ton</strong>
            </div>
            <div className="tc-result-recommended">
              ✅ Recommended AC Size: <strong>{result.recommended} Ton</strong>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
