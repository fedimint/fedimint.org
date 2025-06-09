{
  description = "Dev shell for Docusaurus site";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in {
        devShells.default = pkgs.mkShell {
          buildInputs = [
            pkgs.nodejs_20  # LTS as of early 2024
            pkgs.yarn
          ];
          shellHook = ''
            echo "\033[1;32mDocusaurus dev shell loaded!\033[0m"
            echo "Run 'yarn install' and 'yarn start' to build and serve the site."
          '';
        };
      }
    );
}