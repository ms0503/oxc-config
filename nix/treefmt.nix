{ inputs, ... }:
{
  imports = [
    (inputs.treefmt-nix.flakeModule or { })
  ];
  perSystem =
    { lib, pkgs, ... }:
    lib.optionalAttrs (inputs.treefmt-nix ? flakeModule) {
      treefmt = {
        programs = {
          jsonfmt.enable = true;
          mdformat = {
            enable = true;
            package = pkgs.mdformat.withPlugins (
              ps: with ps; [
                mdformat-gfm
              ]
            );
            settings = {
              end-of-line = "lf";
              number = true;
              wrap = 80;
            };
          };
          nixfmt.enable = true;
          yamlfmt.enable = false;
          yamllint = {
            enable = true;
            excludes = [
              "pnpm-lock.yaml"
              "pnpm-workspace.yaml"
            ];
          };
        };
        settings.formatter.jsonfmt =
          let
            jsonfmt = pkgs.callPackage ./jsonfmt.nix { };
          in
          {
            command = "${jsonfmt}/bin/jf";
            options = lib.mkForce [ ];
            package = jsonfmt;
          };
      };
    };
}
