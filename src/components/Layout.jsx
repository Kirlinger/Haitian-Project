import { useState, useRef, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { C } from '../data/constants';

// ── Main 8-page navigation ──────────────────────────────────────────────────
const NAV_PRIMARY = [
  { label: "About the Project", path: "/about", icon: "🏥" },
  { label: "Health Crisis", path: "/health-crisis", icon: "🚨" },
  { label: "Solutions", path: "/solutions", icon: "💡" },
  { label: "Budget & Funding", path: "/budget", icon: "💰" },
  { label: "Impact & Results", path: "/impact", icon: "📈" },
  { label: "Implementation", path: "/plan", icon: "🗓️" },
];

// ── Detailed sub-navigation groups ──────────────────────────────────────────
const NAV_GROUPS = [
  {
    label: "Deep Dive",
    icon: "📋",
    items: [
      { label: "Vision & Mission",        path: "/vizyon" },
      { label: "12 Departments",          path: "/depatman" },
      { label: "ROI & Projections",       path: "/roi" },
      { label: "History & Context",       path: "/istwa" },
      { label: "Technology Details",      path: "/teknoloji" },
    ],
  },
  {
    label: "Programs",
    icon: "🎓",
    items: [
      { label: "Medical Training",         path: "/formasyon" },
      { label: "Research & Science",       path: "/rechech" },
      { label: "Community Health",         path: "/kominote" },
      { label: "Diaspora Bond",            path: "/dyaspora" },
      { label: "Partnerships",             path: "/patenayi" },
    ],
  },
  {
    label: "Info",
    icon: "ℹ️",
    items: [
      { label: "Leadership Team",          path: "/ekip" },
      { label: "Transparency",             path: "/transparans" },
      { label: "News & Updates",           path: "/aktyalite" },
    ],
  },
];

function DropdownMenu({ group, onClose }) {
  return (
    <div style={{
      position: "absolute",
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)",
      background: "rgba(0,15,45,0.98)",
      border: `1px solid ${C.borderBright}`,
      borderRadius: 12,
      padding: "8px 0",
      minWidth: 220,
      boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
      backdropFilter: "blur(20px)",
      zIndex: 1000,
      animation: "fadeIn 0.15s ease",
    }}>
      {group.items.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          onClick={onClose}
          style={{
            display: "block",
            padding: "10px 18px",
            color: C.soft,
            textDecoration: "none",
            fontSize: 13,
            fontWeight: 500,
            transition: "all 0.15s ease",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "rgba(0,100,255,0.18)"; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.soft; }}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default function Layout() {
  const [openGroup, setOpenGroup] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState(null);
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    const id = setTimeout(() => {
      setOpenGroup(null);
      setMobileOpen(false);
    }, 0);
    return () => clearTimeout(id);
  }, [location.pathname]);

  useEffect(() => {
    function handleClick(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenGroup(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Top navbar */}
      <nav ref={navRef} style={{
        position: "sticky",
        top: 0,
        zIndex: 900,
        background: "rgba(0,10,30,0.97)",
        borderBottom: `1px solid ${C.border}`,
        backdropFilter: "blur(20px)",
      }}>
        <div style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          alignItems: "center",
          height: 60,
          gap: 6,
        }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10, marginRight: 12, flexShrink: 0 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 8,
              background: `linear-gradient(135deg, ${C.blue}, ${C.accent})`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 18,
            }}>🏥</div>
            <div>
              <div style={{ color: "#fff", fontSize: 13, fontWeight: 800, lineHeight: 1.2, letterSpacing: 0.3 }}>HNIH</div>
              <div style={{ color: C.soft, fontSize: 9, letterSpacing: 0.8 }}>HAITI HEALTH PROJECT</div>
            </div>
          </Link>

          {/* Primary nav links — desktop */}
          <div style={{ display: "flex", alignItems: "center", gap: 2, flex: 1 }} className="desktop-nav">
            {NAV_PRIMARY.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  textDecoration: "none",
                  display: "flex", alignItems: "center", gap: 5,
                  padding: "6px 10px",
                  borderRadius: 8,
                  fontSize: 12,
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  color: isActive(item.path) ? "#fff" : C.soft,
                  background: isActive(item.path) ? "rgba(0,80,200,0.25)" : "transparent",
                  transition: "all 0.15s ease",
                  borderBottom: isActive(item.path) ? `2px solid ${C.accent}` : "2px solid transparent",
                }}
                onMouseEnter={e => { if (!isActive(item.path)) { e.currentTarget.style.color = "#fff"; e.currentTarget.style.background = "rgba(0,60,160,0.15)"; } }}
                onMouseLeave={e => { if (!isActive(item.path)) { e.currentTarget.style.color = C.soft; e.currentTarget.style.background = "transparent"; } }}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}

            {/* Dropdown groups */}
            {NAV_GROUPS.map((group) => (
              <div key={group.label} style={{ position: "relative" }}>
                <button
                  onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)}
                  style={{
                    background: openGroup === group.label ? "rgba(0,80,200,0.25)" : "transparent",
                    border: "none",
                    color: openGroup === group.label ? "#fff" : C.soft,
                    padding: "6px 10px",
                    borderRadius: 8,
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    whiteSpace: "nowrap",
                  }}
                >
                  <span>{group.icon}</span>
                  <span>{group.label}</span>
                  <span style={{ fontSize: 9, opacity: 0.7 }}>{openGroup === group.label ? "▲" : "▼"}</span>
                </button>
                {openGroup === group.label && (
                  <DropdownMenu group={group} onClose={() => setOpenGroup(null)} />
                )}
              </div>
            ))}
          </div>

          {/* CTA button */}
          <Link to="/contact" style={{ textDecoration: "none", flexShrink: 0 }} className="desktop-nav">
            <button style={{
              background: `linear-gradient(135deg, ${C.blue}, ${C.accent})`,
              border: "none",
              color: "#fff",
              padding: "7px 14px",
              borderRadius: 8,
              fontSize: 12,
              fontWeight: 700,
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}>
              💬 Contact / Support
            </button>
          </Link>

          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: "transparent",
              border: `1px solid ${C.border}`,
              color: "#fff",
              width: 38,
              height: 38,
              borderRadius: 8,
              cursor: "pointer",
              fontSize: 18,
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{
            background: "rgba(0,10,30,0.99)",
            borderTop: `1px solid ${C.border}`,
            maxHeight: "80vh",
            overflowY: "auto",
            padding: "8px 0 16px",
          }}>
            <Link to="/" onClick={() => setMobileOpen(false)} style={{
              display: "block",
              padding: "12px 20px",
              color: C.light,
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 700,
              borderBottom: `1px solid ${C.border}`,
              marginBottom: 8,
            }}>
              🏠 Home
            </Link>
            {/* Primary nav in mobile */}
            {NAV_PRIMARY.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  padding: "10px 20px",
                  color: isActive(item.path) ? C.light : C.soft,
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: isActive(item.path) ? 700 : 500,
                  borderBottom: `1px solid ${C.border}`,
                  background: isActive(item.path) ? "rgba(0,80,200,0.15)" : "transparent",
                }}
              >
                {item.icon} {item.label}
              </Link>
            ))}

            {/* Groups in mobile */}
            {NAV_GROUPS.map((group) => (
              <div key={group.label}>
                <button
                  onClick={() => setMobileGroup(mobileGroup === group.label ? null : group.label)}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    color: "#fff",
                    padding: "10px 20px",
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span>{group.icon} {group.label}</span>
                  <span style={{ fontSize: 10 }}>{mobileGroup === group.label ? "▲" : "▼"}</span>
                </button>
                {mobileGroup === group.label && (
                  <div style={{ background: "rgba(0,30,80,0.4)" }}>
                    {group.items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setMobileOpen(false)}
                        style={{
                          display: "block",
                          padding: "10px 36px",
                          color: C.soft,
                          textDecoration: "none",
                          fontSize: 13,
                          borderBottom: `1px solid rgba(0,80,200,0.1)`,
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div style={{ padding: "12px 20px" }}>
              <Link to="/contact" onClick={() => setMobileOpen(false)} style={{ textDecoration: "none" }}>
                <button style={{
                  width: "100%",
                  background: `linear-gradient(135deg, ${C.blue}, ${C.accent})`,
                  border: "none",
                  color: "#fff",
                  padding: "12px",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: "pointer",
                }}>
                  💬 Contact / Support
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Page content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer style={{
        background: "rgba(0,10,30,0.95)",
        borderTop: `1px solid ${C.border}`,
        marginTop: 60,
        padding: "40px 20px 20px",
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 32,
            marginBottom: 32,
          }}>
            {/* Brand */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: `linear-gradient(135deg, ${C.blue}, ${C.accent})`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 20,
                }}>🏥</div>
                <div>
                  <div style={{ color: "#fff", fontSize: 15, fontWeight: 800 }}>HNIH</div>
                  <div style={{ color: C.soft, fontSize: 10 }}>Hôpital National Intégré d'Haïti</div>
                </div>
              </div>
              <p style={{ color: C.soft, fontSize: 13, lineHeight: 1.6, margin: "0 0 12px" }}>
                Haiti's national health project. 1,200 beds, 12 specialties, $850M investment.
                Opening 2031.
              </p>
              <div style={{ display: "flex", gap: 8 }}>
                {["𝕏", "in", "f", "📧"].map((s, i) => (
                  <div key={i} style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: "rgba(0,60,150,0.4)",
                    border: `1px solid ${C.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer", fontSize: 13, color: C.soft,
                  }}>{s}</div>
                ))}
              </div>
            </div>

            {/* The Project */}
            <div>
              <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 14 }}>The Project</div>
              {[
                { l: "About HNIH", p: "/about" },
                { l: "Health Crisis in Haiti", p: "/health-crisis" },
                { l: "Solutions & Innovations", p: "/solutions" },
                { l: "Budget & Funding", p: "/budget" },
                { l: "Impact & Results", p: "/impact" },
                { l: "Implementation Plan", p: "/plan" },
              ].map((lnk) => (
                <Link key={lnk.p} to={lnk.p} style={{ display: "block", color: C.soft, textDecoration: "none", fontSize: 13, marginBottom: 8 }}
                  onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                  onMouseLeave={e => e.currentTarget.style.color = C.soft}>
                  {lnk.l}
                </Link>
              ))}
            </div>

            {/* Programs */}
            <div>
              <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 14 }}>Programs & Details</div>
              {[
                { l: "12 Departments", p: "/depatman" },
                { l: "Technology", p: "/teknoloji" },
                { l: "Medical Training", p: "/formasyon" },
                { l: "Community Health", p: "/kominote" },
                { l: "Diaspora Bond", p: "/dyaspora" },
                { l: "Partnerships", p: "/patenayi" },
              ].map((lnk) => (
                <Link key={lnk.p} to={lnk.p} style={{ display: "block", color: C.soft, textDecoration: "none", fontSize: 13, marginBottom: 8 }}
                  onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                  onMouseLeave={e => e.currentTarget.style.color = C.soft}>
                  {lnk.l}
                </Link>
              ))}
            </div>

            {/* Contact */}
            <div>
              <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 14 }}>Contact Us</div>
              {[
                { icon: "📍", text: "Delmas 33, Port-au-Prince, Haiti" },
                { icon: "📞", text: "+509 2940-0000" },
                { icon: "📧", text: "info@hnih.ht" },
                { icon: "🌐", text: "www.hnih.ht" },
              ].map((c, i) => (
                <div key={i} style={{ display: "flex", gap: 8, marginBottom: 10, color: C.soft, fontSize: 13 }}>
                  <span>{c.icon}</span>
                  <span>{c.text}</span>
                </div>
              ))}
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <button style={{
                  marginTop: 8,
                  background: `linear-gradient(135deg, ${C.blue}, ${C.accent})`,
                  border: "none", color: "#fff",
                  padding: "8px 18px", borderRadius: 8,
                  fontSize: 12, fontWeight: 700, cursor: "pointer",
                }}>
                  💬 Get In Touch
                </button>
              </Link>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{
            borderTop: `1px solid ${C.border}`,
            paddingTop: 16,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 8,
          }}>
            <div style={{ color: "#4A6A90", fontSize: 12 }}>
              © 2025 Hôpital National Intégré d'Haïti (HNIH). All rights reserved.
            </div>
            <div style={{ display: "flex", gap: 16 }}>
              {[
                { l: "Transparency", p: "/transparans" },
                { l: "News", p: "/aktyalite" },
                { l: "Contact", p: "/contact" },
              ].map((lnk) => (
                <Link key={lnk.p} to={lnk.p} style={{ color: "#4A6A90", textDecoration: "none", fontSize: 12 }}>{lnk.l}</Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

