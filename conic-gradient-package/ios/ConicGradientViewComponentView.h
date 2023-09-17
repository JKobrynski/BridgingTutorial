#if RCT_NEW_ARCH_ENABLED
#import <React/RCTViewComponentView.h>
#import <QuartzCore/QuartzCore.h>

/**
 * Declare the ObjC interface for that Fabric component class.
 *
 * It must extend RCTViewComponentView
 */
@interface ConicGradientViewComponentView : RCTViewComponentView

@property(nonatomic, readonly, strong) CAGradientLayer * _Nonnull layer;

@end

#endif
