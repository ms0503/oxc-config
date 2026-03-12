{ inputs, ... }:
{
  imports = [
    inputs.treefmt-nix.flakeModule
  ];
  perSystem =
    { lib, pkgs, ... }:
    let
      jsonfmt = pkgs.callPackage ./jsonfmt.nix { };
    in
    {
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
        };
        settings.formatter.jsonfmt = {
          command = "${jsonfmt}/bin/jf";
          options = lib.mkForce [ ];
          package = jsonfmt;
        };
      };
    };
}
