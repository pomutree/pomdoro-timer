fn main() {
    let bundled_icon = std::path::Path::new("icons/icon.ico");

    if !bundled_icon.exists() {
        let source_icon = std::path::Path::new("../public/favicon.ico");

        if source_icon.exists() {
            if let Err(err) = std::fs::create_dir_all("icons") {
                println!("cargo:warning=failed to create icons directory: {err}");
            } else if let Err(err) = std::fs::copy(source_icon, bundled_icon) {
                println!("cargo:warning=failed to copy icon: {err}");
            }
        }

        if !bundled_icon.exists() {
            println!("cargo:warning=icons/icon.ico not found; skipping icon embedding");
            std::env::set_var("TAURI_SKIP_ICON_GEN", "true");
        }
    }

    tauri_build::build()
}
